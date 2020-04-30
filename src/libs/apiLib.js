//import fetch from 'fetch';

export function transformData(inputs) {
  var filterDanceabiltyLow = 0;
  var filterDanceabiltyHigh = 0;
  var filterTempoLow = 0;
  var filterTempoHigh = 0;
  var filterDurationLow = 0;
  var filterDurationHigh = 0;
  var filterValenceLow = 0;
  var filterValenceHigh = 0;

  if (inputs.danceabilty === -1) {
    filterDanceabiltyLow = 0;
    filterDanceabiltyHigh = 1;
  } else {
    filterDanceabiltyLow = inputs.danceabilty / 100 - .02;
    filterDanceabiltyHigh = inputs.danceabilty / 100 + .02;
  }

  if (inputs.tempo === -1) {
    filterTempoLow = 60.0;
    filterTempoHigh = 200.0;
  } else {
    filterTempoLow = inputs.tempo - 5.0;
    filterTempoHigh = inputs.tempo + 5.0;
  }

  if (inputs.duration === -1) {
    filterDurationLow = 0;
    filterDurationHigh = 10 * 60000;
  } else {
    filterDurationLow = (inputs.duration * 60000) - 10000;
    filterDurationHigh = (inputs.duration * 60000) + 10000;
  }

  if (inputs.valence === -1) {
    filterValenceLow = 0;
    filterValenceHigh = 1;
  } else {
    filterValenceLow = inputs.valence / 10 - .02;
    filterValenceHigh = inputs.valence / 10 + .02;
  }

  //console.log(filterTempoLow);

  const searchProps = {
    Dalow: filterDanceabiltyLow,
    Dahigh: filterDanceabiltyHigh,
    Tlow: filterTempoLow,
    Thigh: filterTempoHigh,
    Dulow: filterDurationLow,
    Duhigh: filterDurationHigh,
    Vlow: filterValenceLow,
    Vhigh: filterValenceHigh
  }

  return searchProps;
}
