const map = (mapping) => (data) => {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return data.map(mapping);
  }
  return mapping(data);
};

module.exports = map;
