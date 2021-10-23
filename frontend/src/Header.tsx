// Libraries
import * as React from 'react';
import './Header.css';
// Components
import { IconButton } from '@mui/material';
// Icons
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div className="header">

        <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

        <img 
            className="header__logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpenmenpress.com%2Fwp-content%2Fuploads%2F2018%2F04%2FTinder-Logo.png&f=1&nofb=1"
            alt=""
        />

        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>

    </div>
  );
}

