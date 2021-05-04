const styles = (theme) => {
    return {
        header: {
            height: 300,
            [theme.breakpoints.down("md")]: {
                height: 250,
            },
            [theme.breakpoints.down("sm")]: {
                height: 200,
            },
            [theme.breakpoints.down("xs")]: {
                height: 150,
            },
        },
        title: {
            fontWeight: "700 !important",
            color: theme.textColor,
            position: "absolute",
            top: 220,
            left: "50%",
            fontSize: 164,
            transform: "translate(-50%, -50%)",
            [theme.breakpoints.down("md")]: {
                fontSize: 108,
                top: 180,
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: 95,
                top: 150,
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: 72,
                top: 80,
            },
        },
    };
};

export default styles;
