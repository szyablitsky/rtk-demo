import * as Yup from "yup";

const messageSchema = Yup.object().shape({
  chatId: Yup.number(),
  userId: Yup.number(),
  text: Yup.string().required(),
});

export default messageSchema;
