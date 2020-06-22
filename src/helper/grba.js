const rgba = (r: (string | number), g: (string | number), b:(string | number), a:(string | number)):string => {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default rgba;
