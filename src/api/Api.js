import axios from "axios";

export async function getUser(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3001/user/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getActivity(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3001/user/${id}/activity`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSession(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3001/user/${id}/average-sessions`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPerformance(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3001/user/${id}/performance`);

    return data;
  } catch (error) {
    console.log(error);
  }
}
