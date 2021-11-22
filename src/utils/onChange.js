function onChange({ event, data, setData }) {
  const _data = {};
  _data[event.target.name] = event.target.value;
  setData({
    ...data,
    ..._data,
  });
}

export default onChange;
