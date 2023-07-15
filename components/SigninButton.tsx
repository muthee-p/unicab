"use client"
import React from "react";

import {signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
	const {data: session } = useSession();

	if(session && session.user){
		return (
			<div>
				<p>{session.user.name}</p>
				<button onClick={() => signOut()}>sign Out</button>
			</div>
			)
	}
	return<div>
	<button onClick={ () => signIn()}>Sign in using Google
	</button>
	</div>


};

export default SigninButton;