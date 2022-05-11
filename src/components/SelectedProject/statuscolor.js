    // function to set color of chip component
    const statusColor = (status) => {
        switch (status) {
            case 'Resolved':
                return 'success';
            case 'Open':
                return 'secondary';
            case 'Closed':
                return 'primary';
            default:
                return 'default';
        }
    }

    export default statusColor;