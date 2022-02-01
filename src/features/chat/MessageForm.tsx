import { memo } from "react";
import type { FormikErrors, FormikTouched } from "formik";

import { Message } from "../../store/contracts";

interface Props {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  errors: FormikErrors<Message>;
  touched: FormikTouched<Message>;
  values: Message;
  isError: boolean;
  isLoading: boolean;
}

function ChatForm({
  handleSubmit,
  handleChange,
  errors,
  touched,
  values,
  isError,
  isLoading,
}: Props) {
  return (
    <form onSubmit={handleSubmit}>
      {isError ? <div>Save request is failed</div> : null}
      {/* user select */}
      <div>
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          name="text"
          onChange={handleChange}
          value={values.text}
        />
        {errors.text && touched.text ? <div>{errors.text}</div> : null}
      </div>
      <div>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default memo(ChatForm);
