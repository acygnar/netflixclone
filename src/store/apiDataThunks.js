import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchData } from 'store/apiDataSlice';
export const query = `
{
    allNewsletters {
      buttonLabel
      placeholder
    }
  }
`;

export const fetchApiData = createAsyncThunk('apiData/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.post(
      'https://graphql.datocms.com/',
      {
        query,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
        },
      }
    );

    const responseData = response.data.data; // Assuming your GraphQL response is nested under "data"

    thunkAPI.dispatch(fetchData(responseData));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
