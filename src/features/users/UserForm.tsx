import { memo } from "react";
import type { FormikErrors, FormikTouched } from "formik";

import FirmSelect from "../firms/FirmSelect";
import { User } from "../../store/contracts";

interface Props {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  errors: FormikErrors<User>;
  touched: FormikTouched<User>;
  values: User;
  isError: boolean;
  isLoading: boolean;
}

function UserForm({
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
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          onChange={handleChange}
          value={values.role}
        >
          <option value="owner">Owner</option>
          <option value="employeer">Employeer</option>
          <option value="client">Client</option>
        </select>
        {errors.role && touched.role ? <div>{errors.role}</div> : null}
      </div>
      <div>
        <label htmlFor="firmId">Firm</label>
        <FirmSelect
          id="firmId"
          name="firmId"
          onChange={handleChange}
          value={values.firmId}
        />
        {errors.firmId && touched.firmId ? <div>{errors.firmId}</div> : null}
      </div>
      <div>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default memo(UserForm);
