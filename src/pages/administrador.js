import React from "react";

import { withAuthenticator } from "@aws-amplify/ui-react";

function Administrador({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Administrador);
