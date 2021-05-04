import { Button, TextField, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import { getCall } from "../../utils/helpers";
import styles from "./styles";

const Home = ({ classes, history }) => {
    const [notebookEntry, setNotebookEntry] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [frequency, setFrequency] = useState(0);
    const [similarWords, setSimilarWords] = useState([]);

    const fetchFrequency = () => {
        const url = `/notebook/frequency?searchQuery=${searchQuery}&notebookEntry=${notebookEntry}`;
        getCall(url).then((res) => {
            const frequency = res.data;
            setFrequency(frequency);
        });
    };

    const fetchSimilarWords = () => {
        const url = `/notebook/similar?searchQuery=${searchQuery}&notebookEntry=${notebookEntry}`;
        getCall(url).then((res) => {
            const similarWords = res.data;
            setSimilarWords(similarWords);
        });
    };

    return (
        <div>
            <Header history={history} />
            <section className={classes.container}>
                <TextField
                    label="Notebook entry"
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Notebook entry"
                    fullWidth
                    className={classes.input}
                    onChange={(e) => setNotebookEntry(e.target.value)}
                    value={notebookEntry}
                />
                <TextField
                    label="Search Word"
                    variant="outlined"
                    placeholder="Search Word"
                    className={classes.input}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={fetchFrequency}
                >
                    Frequency
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={fetchSimilarWords}
                >
                    Similar Words
                </Button>
                <section className={classes.results}>
                    <h3>Frequency</h3>
                    <span>
                        The word "{searchQuery}" has occured {frequency} times
                    </span>
                    <h3>Similar Words</h3>
                    {similarWords.reduce(
                        (accumulator, word) =>
                            accumulator + ' "' + word + '"  ',
                        ""
                    )}
                </section>
            </section>
        </div>
    );
};

export default withStyles(styles)(Home);
