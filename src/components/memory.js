
const Memory = (data) => {
  return (
    <div className='memory'>
      <button onClick={() => data.postData(data.num)}>Save</button>
      <button onClick={() => data.fetchData()}>Read</button>
    </div>
);
}

export default Memory;