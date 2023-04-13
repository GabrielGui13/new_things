// Campos Auxiliares

import { CalculateOutput } from 'src/models/calcs/dto/calculate-output.input';
import { CreateCalcOutput } from 'src/models/calcs/dto/create-calc.output';

const calcBs = (dp: number, dpi: number, h: number) => {
  if (!dp) return null;
  return +Math.sqrt(h ** 2 + dp ** 2).toFixed(3); // Eq j
};
const calcHtg_Aux = (bs: number, R: number) => {
  if (bs == null) return null;
  return +Math.sqrt(R ** 2 - (bs / 2) ** 2).toFixed(3); // Eq L
};

const calcTeta = (bs: number, htgAux: number) => {
  if (bs == null || bs <= 0) return null;
  return +(Math.atan((2 * htgAux) / bs) * 180 / Math.PI).toFixed(2); // Eq m
};

const calcBeta = (bs: number, dp: number, h: number) => {
  if (bs == null || dp <= 0) return null;
  return +(Math.atan(h / dp)* 180 / Math.PI).toFixed(2); // Eq n
};

const calcAlfa = (bs: number, teta: number, beta: number) => {
  if (bs == null || bs <= 0) return null;
  return +((180 - teta - beta)).toFixed(2); // Eq p
};

const calcHc_Aux = (bs: number, alfa: number, R: number) => {
  if (bs == null || alfa == null || bs <= 0) return null;
  return +(R * Math.sin(alfa/180 * Math.PI)).toFixed(3); // Eq q
};

const calcDpc = (bs: number, alfa: number, R: number) => {
  if (bs == null || alfa == null || bs <= 0) return null;
  return +(R * Math.cos(alfa/180 * Math.PI)).toFixed(3); // Eq s - 2 casas decimais
};

const calcL1_Aux = (l1: number, d1l: number, hasAe: number) => {
  if (!l1 || hasAe) return null;
  if (l1 < d1l) return l1;
  return d1l;
};

// Dados de Saída calculados

const calcDp = (hasDpi: boolean, dpi: number, h: number, R: number) => {
  if (!hasDpi && h > 0) return +Math.sqrt(2 * R * h - h ** 2).toFixed(2); // Eq 7
  if (!hasDpi || !dpi || !h) return null;
  return dpi;
};

const calcHpFc = (
  dp: number,
  h1: number,
  mc: number,
  r: number,
  hcAux: number,
  R: number,
) => {
  if (dp == null) return null;
  //console.log({h1, mc, r, hcAux, R})
  return +(h1 + (mc + r) * (hcAux - h1) / (R + mc + r)).toFixed(2); // Eq a
};

const calcRpFc = (
  hpFc: number,
  dp: number,
  dpc: number,
  R: number,
  hcAux: number,
) => {
  if (hpFc == null) return null;
  return +(dp + dpc - Math.sqrt(R ** 2 - (hcAux - hpFc) ** 2)).toFixed(2); // Eq b
};

const calcD1l = (
  rpFc: number,
  hpFc: number,
  mc: number,
  r: number,
  h1: number,
) => {
  if (rpFc == null) return null;
  return +(rpFc - Math.sqrt((mc + r) ** 2 - (hpFc - h1) ** 2)).toFixed(2); // Eq c
};

const calcH1l_Ae = (
  hasAe: boolean,
  hpFc: number,
  mc: number,
  hcAux: number,
  R: number,
) => {
  if (hpFc == null || hpFc <= 0 || !hasAe) return null;
  return +(hpFc - (mc * (hcAux - hpFc)) / R).toFixed(2); // Eq d
};

const calcD1l_Ae = (
  hasAe: boolean,
  h1lAe: number,
  d1l: number,
  r: number,
  h1: number,
) => {
  if (!hasAe || h1lAe == null || h1lAe <= 0) return null;
  return +(d1l + Math.sqrt(r ** 2 - (h1lAe - h1) ** 2)).toFixed(2); // Eq e
};

// Calculo de planos de cobertura

export const calcCoveragePlan = (data: CalculateOutput): CreateCalcOutput => {
  // const da saída dp
  //console.log(data)

  const dp = calcDp(
    data.dpi,
    data.dpi_distance,
    data.spda_height,
    data.project_class_radius,
  );

  // const dos campos auxiliares
  const bs = calcBs(dp, data.dpi_distance, data.spda_height);
  const htgAux = calcHtg_Aux(bs, data.project_class_radius);
  const teta = calcTeta(bs, htgAux);
  const beta = calcBeta(bs, dp, data.spda_height);
  const alfa = calcAlfa(bs, teta, beta);
  const dpc = calcDpc(bs, alfa, data.project_class_radius);
  const hcAux = calcHc_Aux(bs, alfa, data.project_class_radius);

  // const das saídas
  const hpFc = calcHpFc(
    dp,
    data.structure_height,
    data.margin,
    data.ea_radius,
    hcAux,
    data.project_class_radius,
  );
  const rpFc = calcRpFc(hpFc, dp, dpc, data.project_class_radius, hcAux);
  const d1l = calcD1l(
    rpFc,
    hpFc,
    data.margin,
    data.ea_radius,
    data.structure_height,
  );
  const h1lAe = calcH1l_Ae(
    data.explosive_atmosphere,
    hpFc,
    data.margin,
    hcAux,
    data.project_class_radius,
  );
  const d1lAe = calcD1l_Ae(
    data.explosive_atmosphere,
    h1lAe,
    d1l,
    data.ea_radius,
    data.structure_height,
  );

  //console.log({bs, htgAux, teta, beta, alfa, dpc, hcAux})
  //console.log({ dp, hpFc, rpFc, d1l, h1lAe, d1lAe, hcAux })

  return { protected_horizontal_distance: dp, hc_aux: hcAux, fic_plan_height: hpFc, fic_plan_radius: rpFc, structure_limit_horizontal_distance: d1l, ae_limit_height: h1lAe || 0, ae_limit_horizontal_distance: d1lAe || 0, dpc};
};
