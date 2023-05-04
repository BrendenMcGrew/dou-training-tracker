import React from "react";
import {Box, Button, Checkbox, Container, FormControlLabel, Link, TextField, Typography} from "@mui/material";
import ScorpLogo from "../../../public/ScorpCampLogo.png"
import Image from "next/image";

export default function Login() {
    return (
        <main className="flex min-h-screen">
            <Container maxWidth={'sm'} className="pt-10">
                    <form className="flex flex-col items-center justify-center gap-5" method="post" action="/api/auth/callback/credentials">
                        <Image src={ScorpLogo} alt={'Scorpion Camp Logo'}/>
                        <Typography variant="h1">
                            552 ACNS DOU Login
                        </Typography>
                        <Typography>Need an account? Request one <Link href={'/'}>Here</Link></Typography>
                        <TextField className="w-[50%]" label="Username" variant="outlined" name="Username"/>
                        <TextField className="w-[50%]" label="Password" variant="outlined" type="password" name="Password"/>
                        <Box component="div" className="grid grid-cols-2">
                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Remember me"/>
                            <Button variant="contained" type="submit">Submit</Button>
                        </Box>
                    </form>
            </Container>
        </main>
    );
}
