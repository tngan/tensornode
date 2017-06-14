const { 
  serving: ts, 
  model: md,
  wrappers: wp,
} = require('./index');

function newPredictRequest(modelName = 'tensornode', modelVersion = 1) {
  const version = new wp.Int64Value({ value: modelVersion })
  const modelSpec = new md.ModelSpec({
    name: modelName,
    version
  });
  return new ts.PredictRequest({
    model_spec: modelSpec
  });
}
