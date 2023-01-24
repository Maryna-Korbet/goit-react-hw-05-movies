import { Grid } from 'react-loader-spinner';

export function Loader() {
    return (
        <Grid
            display="flex"
            justifyContent="space-around"
            padding="50px"
            height="70"
            width="70"
            color="#3f51b5"
            ariaLabel="grid-loading"
            radius="12.5"
        />
    );
};