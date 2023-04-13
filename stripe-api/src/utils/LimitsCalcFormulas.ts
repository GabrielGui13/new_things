import { CalculateOutput } from 'src/models/calcs/dto/calculate-output.input';
import { CreateCalcOutput } from 'src/models/calcs/dto/create-calc.output';
/*
Nomeclaturas

h1 - altura estrutura
d1 - lartgura estrutura

h - altura spda

hasDpi - tem dpi?
dpi - distância do dpi

R - Raio da classificação
r - raio de proteção da área explosiva

dp - distancia de proteção

bs - base do triangulo

phi - ??? auxliar phi do angulo???
delta - auxiliar delta do ângulo 

*/
// Campos Auxiliares

const calcL1_Aux = (l1: number, d1: number) => {
  // ok
  if (!l1 || l1 > 2 * d1) return null;
  if (l1 <= d1) return l1;
  return d1;
};

const calcBs = (hasDpi: boolean, dpi: number, h: number) => {
  if (!h || !hasDpi || !dpi) return null;
  return +Math.sqrt(h ** 2 + dpi ** 2).toFixed(3);
};

const calcPhi = (bs: number, h: number, dpi: number) => {
  if (!bs) return null;
  return +((Math.atan(h / dpi) * 180) / Math.PI).toFixed(2);
};

const CalcHc_Aux = (R: number, dpi: number) => {
  return Math.sqrt(R ** 2 - (R - dpi) ** 2);
};

const calcHc = (
  h: number,
  R: number,
  hasDpi: boolean,
  bs: number,
  phi: number,
  delta: number,
) => {
  if (!h || h > R) return null;
  if (!hasDpi && !bs) return R;
  if (phi + delta < 90) return null;
  return +(R * Math.sin(((phi + delta) * Math.PI) / 180)).toFixed(3); // Eq e
};

const calcDelta = (bs: number, R: number) => {
  return (Math.acos(bs / (2 * R)) * 180) / Math.PI;
  //ACOS(bs/(2*R))*180/PI)
};

const calcHcRef = (bsR: number, omegaR: number, deltaR: number, R: number) => {
  if (!bsR) return null;
  if (deltaR + omegaR < 90)
    return +(R * Math.sin(((deltaR + omegaR) * Math.PI) / 180)).toFixed(3);
  return +(R * Math.sin(((180 - deltaR - omegaR) * Math.PI) / 180)).toFixed(3);
};

const calcDcRef = (hcRef: number, R: number, h: number, d1: number) => {
  if (!hcRef) return null;
  return +(Math.sqrt(R ** 2 - (hcRef - h) ** 2) - d1).toFixed(3);
};

const calcBsR = (hasAe: boolean, dp: number, h: number) => {
  if (!hasAe || !dp) return null;
  return +Math.sqrt(h ** 2 + dp ** 2).toFixed(3);
};

const calcDeltaR = (bsR: number, h: number, dp: number) => {
  if (!bsR) return null;
  return +((Math.atan(h / dp) * 180) / Math.PI).toFixed(2);
};

const calcOmegaR = (bsR: number, R: number) => {
  if (!bsR) return null;
  return +(
    (Math.atan((2 * Math.sqrt(R ** 2 - (bsR / 2) ** 2)) / bsR) * 180) /
    Math.PI
  ).toFixed(2);
};

const calcDpL = (
  hasDpi: boolean,
  h: number,
  R: number,
  dpi: number,
  hc: number,
) => {
  if (!hasDpi && h > 0 && h <= R)
    return +Math.sqrt(2 * R * h - h ** 2).toFixed(3);
  return +(dpi + Math.sqrt(R ** 2 - hc ** 2)).toFixed(3);
};

// Dados de saída

const calcDp = (hasDpi: boolean, dpi: number, h: number, R: number) => {
  // ok
  if (!hasDpi && h > 0) return +Math.sqrt(2 * R * h - h ** 2).toFixed(2); // Eq 7
  if (!hasDpi || !dpi || !h) return null;
  return dpi;
};

const calcMc = (
  hasDpi: boolean,
  hc: number,
  h1: number,
  d1: number,
  R: number,
  r: number,
  phi: number,
  delta: number,
  dpL: number,
  h: number,
  hcAux: number,
) => {
  if (!hasDpi || (dpL <= R && phi + delta >= 90 && h <= hcAux))
    return +(
      +Math.sqrt((dpL - d1) ** 2 + (hc - h1) ** 2).toFixed(2) -
      (R + r)
    ).toFixed(2);
  return null;

  /*if (!hasDpi || phi + delta >= 90)
    return +(+Math.sqrt((dpL - d1) ** 2 + (hc - h1) ** 2).toFixed(2) - (R + r)).toFixed(2);
  return null;*/
};

const calcH1Pc_Ae = (hcRef: number, h1: number, r: number, dcRef: number) => {
  if (!hcRef) return null;
  return +(
    h1 +
    (r * (hcRef - h1)) / Math.sqrt((hcRef - h1) ** 2 + dcRef ** 2)
  ).toFixed(2);
};

const calcD1Pc_Ae = (h1PcAe: number, d1: number, r: number, h1: number) => {
  if (!h1PcAe) return null;
  return +(d1 + Math.sqrt(r ** 2 - (h1PcAe - h1) ** 2)).toFixed(2);
};

// Calculo limites

export const calcLimits = (
  data: CalculateOutput,
): CreateCalcOutput => {
  // const dos campos auxiliares
  const l1Aux = calcL1_Aux(data.structure_width, data.structure_distance);
  const bs = calcBs(data.dpi, data.dpi_distance, data.spda_height);
  const phi = calcPhi(bs, data.spda_height, data.dpi_distance);
  // const dos dados de saída
  const dp = calcDp(
    data.dpi,
    data.dpi_distance,
    data.spda_height,
    data.project_class_radius,
  );

  // auxiliares
  const bsR = calcBsR(data.explosive_atmosphere, dp, data.spda_height);
  const deltaR = calcDeltaR(bsR, data.spda_height, dp);
  const omegaR = calcOmegaR(bsR, data.project_class_radius);
  const hcRef = calcHcRef(bsR, omegaR, deltaR, data.project_class_radius);
  const dcRef = calcDcRef(
    hcRef,
    data.project_class_radius,
    data.spda_height,
    data.structure_distance,
  );

  // saida

  const h1PcAe = calcH1Pc_Ae(
    hcRef,
    data.structure_height,
    data.ea_radius,
    dcRef,
  );
  const d1PcAe = calcD1Pc_Ae(
    h1PcAe,
    data.structure_distance,
    data.ea_radius,
    data.structure_height,
  );

  let RValues = [20, 30, 45, 60];
  let hcObj = {};
  let mcObj = {};
  let dpObj = {};

  RValues.map((R) => {
    const hcAux = CalcHc_Aux(R, data.dpi_distance);
    const delta = calcDelta(bs, R);

    const hc = calcHc(data.spda_height, R, data.dpi, bs, phi, delta);
    const dpL = calcDpL(data.dpi, data.spda_height, R, data.dpi_distance, hc);
    const mc = calcMc(
      data.dpi,
      hc,
      data.structure_height,
      data.structure_distance,
      R,
      data.ea_radius,
      phi,
      delta,
      dpL,
      data.spda_height,
      hcAux,
    );

    dpObj[R] = dpL;
    hcObj[R] = hc;
    mcObj[R] = mc;
  });

  return {
    protected_horizontal_distance: dp,
    margin_object: mcObj,
    ae_limit_height: h1PcAe || 0,
    ae_limit_horizontal_distance: d1PcAe || 0,
    hc_aux_object: hcObj,
    dp_object: dpObj
  };
};
