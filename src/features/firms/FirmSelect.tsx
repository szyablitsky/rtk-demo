import { memo } from "react";
import { useGetFirmsQuery } from "../../app/services/firms";

function FirmSelect({ ...rest }) {
  const { data, isLoading, isError } = useGetFirmsQuery();

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) {
    return <div>Get request is failed</div>;
  }

  return (
    <select {...rest}>
      {(data || []).map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default memo(FirmSelect);
