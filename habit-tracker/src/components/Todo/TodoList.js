import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TodoItem from './TodoItem';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';

function TodoList(props) {
    
    const [habitsData, setHabitsData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/Habit?userId=${props.userId}`);
      const data = response.data;
      setHabitsData((prevData) => [...data]);
      }
      fetchData();
    }, [props.userId])
    
    return (
      <Grid container spacing={0} style={{ padding: '20px', marginLeft: '50px', width: '1000px' }} >
        <h1 style={{ marginBottom: '30px'}}> Welcome Back! Here is your todo list :</h1>    
        <Button variant="contained" style={
            { backgroundColor: '#00e676', 
            color: 'white', 
            width: '160px', 
            height: '30px', 
            fontSize: '16px', 
            marginLeft: '800px'}
          }
          onClick = {() => props.updateCurView(6)}
        >Add a habit</Button>
        <Grid container style={{ display: 'flex', flexDirection: 'row', paddingLeft: '0px', height: 'auto', width: '100%' }}>
            {habitsData.map((habit) => (
              <TodoItem habit={habit} />
            ))}
        </Grid>
      </Grid>
    );
  }
export default TodoList;
