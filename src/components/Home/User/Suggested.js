import React from 'react';
import Box from "@material-ui/core/Box";
import Avatar from "../../Common/Avatar";
import AVATAR_IMG from '../../../img/leo.jpg';

function Suggested(props) {
    return (
        <Box>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
        </Box>
    );
}

export default Suggested;