import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import React, { useState, useEffect } from 'react';
import useDebounce from '../../resource/hooks/use-debounce';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        width: 400,
        borderBottom: '1px solid #cccccc'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    listItem: {
        '&:hover': {
            backgroundColor: '#b0e0e6'
        }
    }
}));

// Usage
export default function SearchBar({onAdd}) {
    const classes = useStyles();
    // State and setter for search term
    const [searchTerm, setSearchTerm] = useState('');
    // State and setter for search results
    const [results, setResults] = useState([]);
    // State for search status (whether there is a pending API request)
    const [isSearching, setIsSearching] = useState(false);

    // Now we call our hook, passing in the current searchTerm value.
    // The hook will only return the latest value (what we passed in) ...
    // ... if it's been more than 500ms since it was last called.
    // Otherwise, it will return the previous value of searchTerm.
    // The goal is to only have the API call fire when user stops typing ...
    // ... so that we aren't hitting our API rapidly.
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    // Here's where the API call happens
    // We use useEffect since this is an asynchronous action
    useEffect(
        () => {
            // Make sure we have a value (user has entered something in input)
            if (debouncedSearchTerm) {
                // Set isSearching state
                setIsSearching(true);
                // Fire off our API call
                searchCharacters(debouncedSearchTerm).then(results => {
                    // Set back to false since request finished
                    setIsSearching(false);
                    // Set results state
                    setResults(results);
                });
            } else {
                setResults([]);
            }
        },
        // This is the useEffect input array
        // Our useEffect function will only execute if this value changes ...
        // ... and thanks to our hook it will only change if the original ...
        // value (searchTerm) hasn't changed for more than 500ms.
        [debouncedSearchTerm]
    );

    // Pretty standard UI with search input and results
    return (
        <div className='searchBar'>
            <Paper component="form" className={classes.root}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search marvel hero"
                    inputProps={{ 'aria-label': 'search hero' }}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </Paper>
            { results.length > 0 &&
                <Paper className={classes.paper}>
                    <List dense className={classes.root}>
                        {results.map(result => (
                            <ListItem key={result.id} className={classes.listItem} button>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={result.name}
                                        src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={result.id} primary={result.name} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="add">
                                        <AddCircleIcon style={{ color: 'green' }} fontSize="large" onClick={() => onAdd({name: result.name})}/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </Paper>}
        </div>
    );
}

// API search function
function searchCharacters(search) {
    const ts = 'heroes';
    const apiKey = '9161ba06103877daa802a8fcce771abc';
    const hash = 'da93bc20bc6dc586d412e102ec4701dd'
    const limit = 10
    const queryString = `nameStartsWith=${search}&ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;
    return fetch(
        `https://gateway.marvel.com/v1/public/characters?${queryString}`,
        {
            method: 'GET'
        }
    )
        .then(r => r.json())
        .then(r => r.data.results)
        .catch(error => {
            console.error(error);
            return [];
        });
}