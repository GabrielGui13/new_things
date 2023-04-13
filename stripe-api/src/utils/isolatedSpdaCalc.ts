// Campos Auxiliares

import { number } from 'joi';
import { CalculateOutput } from 'src/models/calcs/dto/calculate-output.input';
import { CreateCalcOutput } from 'src/models/calcs/dto/create-calc.output';

const calcBs = (dp: number, dpi: number, h: number) => {
  if (!dp) return null;
  return +Math.sqrt(h ** 2 + dp ** 2).toFixed(3); // Eq j
};

const calcHc_Aux = (
  hasDpi: boolean,
  R: number,
  bsAux: number,
  alfa: number,
) => {
  if (!hasDpi) return R;
  if (!bsAux) return null;
  return +(R * Math.sin((alfa * Math.PI) / 180)).toFixed(3);
};

const calcDp_Aux = (
  hasDpi: boolean,
  d1: number,
  R: number,
  mc: number,
  r: number,
  h1: number,
  dpi: number,
  dpc: number,
) => {
  if (!hasDpi)
    return +(d1 + Math.sqrt((R + mc + r) ** 2 - (R - h1) ** 2)).toFixed(3);
  return +(dpi + dpc).toFixed(3);
};

const calcDpc = (hasDpi: boolean, R: number, bsAux: number, alfa: number) => {
  if (!hasDpi) return 0;
  if (!bsAux) return null;
  return +(R * Math.cos((alfa * Math.PI) / 180)).toFixed(2);
};

const calcAlfa = (
  bsAux: number,
  teta: number,
  beta: number,
  delta: number,
  h1: number,
  dpi: number,
  d1: number,
) => {
  if (!bsAux) return null;
  if (
    teta + beta + delta < 90 ||
    Math.atan(((h1 / (dpi - d1)) * 180) / Math.PI) < 0
  )
    return 90;
  return 180 - teta - beta - delta;
};

const calcTeta = (bsAux: number, h1: number, dpi: number, d1: number) => {
  if (!bsAux || Math.atan(h1 / (dpi - d1)) < 0) return null;
  return +((Math.atan(h1 / (dpi - d1)) * 180) / Math.PI).toFixed(3);
};

const calcBeta = (bsAux: number, htAux: number) => {
  if (!bsAux) return null;
  return +(
    (Math.atan(Math.sqrt(bsAux ** 2 - htAux ** 2) / htAux) * 180) /
    Math.PI
  ).toFixed(3);
};

const calcDelta = (bsAux: number, htAux: number, R: number) => {
  if (!bsAux) return null;
  return +((Math.acos(htAux / R) * 180) / Math.PI).toFixed(3);
};

const calcBs_Aux = (
  hasDpi: boolean,
  l1Aux: number,
  dpi: number,
  R: number,
  d1: number,
  h1: number,
) => {
  if (!hasDpi || !l1Aux || dpi >= R) return null;
  return +Math.sqrt((dpi - d1) ** 2 + h1 ** 2).toFixed(3);
};

const calcHt_Aux = (
  bsAux: number,
  prAux: number,
  R: number,
  mc: number,
  r: number,
) => {
  if (!bsAux) return null;
  return +(
    2 *
    (Math.sqrt(prAux * (prAux - (R + mc + r)) * (prAux - R) * (prAux - bsAux)) /
      (R + mc + r))
  ).toFixed(3);
};

const calcL1_Aux = (l1: number, d1: number) => {
  if (!l1 || l1 > 2 * d1) return null;
  if (l1 <= d1) return l1;
  return l1 - d1;
};

const calcPr_Aux = (
  bsAux: number,
  dpi: number,
  R: number,
  mc: number,
  r: number,
) => {
  if (!bsAux || dpi > R) return null;
  return +((2 * R + mc + r + bsAux) / 2).toFixed(3);
};

const calcEpso = (bsPi: number, phi: number, gama: number) => {
  if (!bsPi) return null;
  return +(180 - phi - gama).toFixed(2);
};

const calcBsPi = (
  hc: number,
  h: number,
  dpAux: number,
  dp: number,
  R: number,
) => {
  if (!hc || !h || (!dp && !dpAux)) return null;
  if (!dp && dpAux > R) return +R.toFixed(3);
  return +Math.sqrt(h ** 2 + dp ** 2).toFixed(3);
};

const calcPhi = (bsPi: number, h: number, dp: number) => {
  if (!bsPi) return null;
  return +((Math.atan(h / dp) * 180) / Math.PI).toFixed(3);
};

const calcGama = (bsPi: number, R: number) => {
  if (!bsPi) return null;
  return +((Math.acos(bsPi / (2 * R)) * 180) / Math.PI).toFixed(3);
};

const calcHcPi = (phi: number, hc: number, R: number, epso: number) => {
  if (!phi || !hc) return null;
  return +(R * Math.sin((epso * Math.PI) / 180)).toFixed(3);
};

// Dados de saída

const calcHc = (hcAux: number, dpAux: number, R: number) => {
  if (!hcAux || !dpAux || dpAux > R) return null;
  return +(hcAux - Math.sqrt(R ** 2 - dpAux ** 2)).toFixed(3);
};

const calcDp = (
  hasDpi: boolean,
  hc: number,
  h: number,
  R: number,
  dpi: number,
) => {
  if (!hc || !h) return null;
  if (!hasDpi) return +Math.sqrt(2 * R * h - h ** 2).toFixed(2);
  return +dpi.toFixed(2);
};

const calcMcp = (
  h: number,
  hc: number,
  dp: number,
  d1: number,
  R: number,
  epso: number,
  hcPi: number,
  h1: number,
  r: number,
) => {
  if (!h || !hc || !dp) return null;
  return +(
    Math.sqrt(
      (dp - d1 + R * Math.cos((epso * Math.PI) / 180)) ** 2 + (hcPi - h1) ** 2,
    ) -
    (R + r)
  ).toFixed(2);
};

const calcH1l = (
  hc: number,
  hcPi: number,
  dp: number,
  R: number,
  mc: number,
  r: number,
  epso: number,
  d1: number,
) => {
  if (!hc) return null;
  if (!dp) return 0;
  return +(
    hcPi -
    Math.sqrt(
      (R + mc + r) ** 2 - (dp + R * Math.cos((epso * Math.PI) / 180) - d1) ** 2
    )
  ).toFixed(2);
};

const calcD1l = (
  dp: number,
  R: number,
  epso: number,
  mc: number,
  r: number,
  hcPi: number,
  h1: number,
) => {
  if (!dp) return 0;
  return +(
    dp +
    R * Math.cos((epso * Math.PI) / 180) -
    Math.sqrt((R + mc + r) ** 2 - (hcPi - h1) ** 2)
  ).toFixed(2);
};

const calcH1_Ae = (
  hasAe: boolean,
  dp: number,
  h1: number,
  r: number,
  hcPi: number,
  R: number,
  mcp: number,
) => {
  if (!hasAe || !dp) return null;
  return +(h1 + (r * (hcPi - h1)) / (R + r + mcp)).toFixed(2);
};

const calcD1_Ae = (
  hasAe: boolean,
  dp: number,
  d1: number,
  r: number,
  h1Ae: number,
  h1: number,
) => {
  if (!hasAe || !dp) return null;
  return +(d1 + Math.sqrt(r ** 2 - (h1Ae - h1) ** 2)).toFixed(2);
};

// Calculo de Spda isolado
export const calcIsolatedSpda = (data: CalculateOutput): CreateCalcOutput => {
  // Const dos campos auxiliares
  const l1Aux = calcL1_Aux(data.structure_width, data.structure_distance);
  const bsAux = calcBs_Aux(
    data.dpi,
    l1Aux,
    data.dpi_distance,
    data.project_class_radius,
    data.structure_distance,
    data.structure_height,
  );
  const prAux = calcPr_Aux(
    bsAux,
    data.dpi_distance,
    data.project_class_radius,
    data.margin,
    data.ea_radius,
  );
  const htAux = calcHt_Aux(
    bsAux,
    prAux,
    data.project_class_radius,
    data.margin,
    data.ea_radius,
  );
  const teta = calcTeta(
    bsAux,
    data.structure_height,
    data.dpi_distance,
    data.structure_distance,
  );
  const beta = calcBeta(bsAux, htAux);
  const delta = calcDelta(bsAux, htAux, data.project_class_radius);
  const alfa = calcAlfa(
    bsAux,
    teta,
    beta,
    delta,
    data.structure_height,
    data.dpi_distance,
    data.structure_distance,
  );
  const dpc = calcDpc(data.dpi, data.project_class_radius, bsAux, alfa);

  const hcAux = calcHc_Aux(data.dpi, data.project_class_radius, bsAux, alfa);
  const dpAux = calcDp_Aux(
    data.dpi,
    data.structure_distance,
    data.project_class_radius,
    data.margin,
    data.ea_radius,
    data.structure_height,
    data.dpi_distance,
    dpc,
  );

  // Const das Saídas
  const hc = calcHc(hcAux, dpAux, data.project_class_radius);
  const dp = calcDp(
    data.dpi,
    hc,
    data.spda_height,
    data.project_class_radius,
    data.dpi_distance,
  );

  // Auxiliares
  const bsPi = calcBsPi(
    hc,
    data.spda_height,
    dpAux,
    dp,
    data.project_class_radius,
  );
  const phi = calcPhi(bsPi, data.spda_height, dp);
  const gama = calcGama(bsPi, data.project_class_radius);
  const epso = calcEpso(bsPi, phi, gama);
  const hcPi = calcHcPi(phi, hc, data.project_class_radius, epso);

  // Saída
  const mcp = calcMcp(
    data.spda_height,
    hc,
    dp,
    data.structure_distance,
    data.project_class_radius,
    epso,
    hcPi,
    data.structure_height,
    data.ea_radius,
  );

  const h1l = calcH1l(
    hc,
    hcPi,
    dp,
    data.project_class_radius,
    data.margin,
    data.ea_radius,
    epso,
    data.structure_distance,
  );
  const d1l = calcD1l(
    dp,
    data.project_class_radius,
    epso,
    data.margin,
    data.ea_radius,
    hcPi,
    data.structure_height,
  );

  const h1Ae = calcH1_Ae(
    data.explosive_atmosphere,
    dp,
    data.structure_height,
    data.ea_radius,
    hcPi,
    data.project_class_radius,
    mcp,
  );
  const d1Ae = calcD1_Ae(
    data.explosive_atmosphere,
    dp,
    data.structure_distance,
    data.ea_radius,
    h1Ae,
    data.structure_height,
  );

  /*console.log({
    l1Aux,
    bsAux,
    prAux,
    htAux,
    teta,
    beta,
    delta,
    alfa,
    hcAux,
    dpc,
    dpAux,
    bsPi,
    phi,
    gama,
    epso,
    hcPi,
  });

  console.log({
    output_spda_height: hc,
    protected_horizontal_distance: dp,
    output_margin: mcp,
    structure_limit_height: h1l,
    structure_limit_horizontal_distance: d1l,
    ae_limit_height: h1Ae,
    ae_limit_horizontal_distance: d1Ae,
  });*/

  return {
    output_spda_height: hc,
    protected_horizontal_distance: dp,
    output_margin: mcp,
    structure_limit_height: h1l,
    structure_limit_horizontal_distance: d1l,
    ae_limit_height: h1Ae || 0,
    ae_limit_horizontal_distance: d1Ae || 0,
    dpc: dpc,
    hc_aux: hcAux,
  };
};
