export function flattenZodErrors(errors) {
  const flattened = {};
  for (const key in errors) {
    if (key === "_errors") continue;
    flattened[key] = errors[key]._errors;
  }
  return flattened;
}
