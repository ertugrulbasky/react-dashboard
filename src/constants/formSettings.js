export const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

export const validateMessages = {
  required: "${label} zorunludur!",
  types: {
    email: "Geçerli bir mail adresi giriniz..",
    number: "Geçerli bir sayı giriniz..",
  },
  number: {
    range: "${label} ${min} ve ${max} arasında bir değer olmaldıır.",
  },
};
