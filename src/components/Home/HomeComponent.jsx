import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Styles from "../Home/HomeComponent.module.css";
import NavbarComponent from "../Navbar/NavbarComponent";
import ViewJobComponent from '../ViewJob/ViewJobComponent';
import SearchJobComponent from '../SearchJob/SearchJobComponent';

function HomeComponent() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };
    return (
        <>
            <NavbarComponent />
            <div className={Styles.TabContainer}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            <Tab label="View Jobs" value="1" />
                            <Tab label="Search Jobs" value="2" />                            
                        </TabList>
                    </Box>
                    <TabPanel value="1"><ViewJobComponent/></TabPanel>
                    <TabPanel value="2"><SearchJobComponent/></TabPanel>                   
                </TabContext>
            </div>
        </>
    );
}

export default HomeComponent;
