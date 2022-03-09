import { memo } from "react";

import { useGetUserQuery } from "../../app/services/users";

function Home() {
  const { data: user } = useGetUserQuery({ id: 6 });

  return <>
    <h1>Hello {user?.name}</h1>

    <h5>role: {user?.role}</h5>
    <h5>email: {user?.email}</h5>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla
      porttitor massa id neque. Eu sem integer vitae justo. Odio euismod
      lacinia at quis. Cras semper auctor neque vitae. Amet nulla facilisi
      morbi tempus iaculis urna id volutpat. Arcu cursus euismod quis viverra
      nibh cras pulvinar. Sit amet volutpat consequat mauris nunc congue nisi
      vitae. Facilisis magna etiam tempor orci eu lobortis. Volutpat blandit
      aliquam etiam erat. Eu facilisis sed odio morbi. Sed libero enim sed
      faucibus turpis. Dis parturient montes nascetur ridiculus mus mauris
      vitae ultricies leo. Imperdiet nulla malesuada pellentesque elit eget.
    </p>
  </>;
}

export default memo(Home);
