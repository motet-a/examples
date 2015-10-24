import React from 'react';
import { Link } from 'router5-react';

export default function Nav(props) {
    return (
        <nav>
            <Link routeName='inbox' routeOptions={{ reload: true }}>Inbox</Link>
            <Link routeName='compose'>Compose</Link>
            <Link routeName='contacts'>Contacts</Link>
        </nav>
    );
}