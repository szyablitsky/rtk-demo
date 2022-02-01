import { memo } from "react";
import type { FormikErrors, FormikTouched } from "formik";

import { Chat } from "../../store/contracts";

interface Props {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  errors: FormikErrors<Chat>;
  touched: FormikTouched<Chat>;
  values: Chat;
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
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && touched.name ? <div>{errors.name}</div> : null}
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
