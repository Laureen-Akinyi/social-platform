const SearchPost = ({ posts, search, setSearch, setPosts }) => {
    // 
    const handleSearch = (e) => {
        e.preventDefault()
        console.log("Search functionality at work!")
        // const filteredPosts = posts.filter(post =>
        //   post.title.toLowerCase().includes(search.toLowerCase())
        // );
      
        // // Update the state with the filtered posts
        // setPosts(filteredPosts);
      };
    return (
        <form className='searchForm' onSubmit={handleSearch}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Posts'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}
export default SearchPost