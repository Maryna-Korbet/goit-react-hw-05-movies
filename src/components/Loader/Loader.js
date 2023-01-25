import { Grid } from 'react-loader-spinner';

function Loader() {
    return (
        <Grid
            display="flex"
            justifyContent="space-around"
            padding="50px"
            height="30"
            width="30"
            color="orangered"
            ariaLabel="grid-loading"
            radius="12.5"
        />
    );
};

export default Loader;