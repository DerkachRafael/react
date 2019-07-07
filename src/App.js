import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from "./components/Table/Table";
import axios from 'axios';
import Pagination from "./components/Pagination/Pagination";
import Posts from "./components/Posts/Posts";
import FileUpload from "./components/Fileupload/FileUpload";

// function App() {
//     const [posts, setPosts] = useState([]);
//        const [filesData, setFilesData] = useState([]);
//        const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10);
//
//     useEffect(() => {
//         const fetchPosts = async () => {
//             // setLoading(true);
//             // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//             // setPosts(res.data);
//             // setLoading(false);
//             const res = await axios.get('http://localhost:5000/upload');
//             console.log(res);
//             setFilesData(res.data);
//         };
//
//         fetchPosts();
//     }, []);
//
//     // Get current posts
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//
//     console.log(indexOfLastPost);
//     console.log(indexOfFirstPost);
//     console.log(currentPosts);
//
//     // Change page
//     const paginate = pageNumber => setCurrentPage(pageNumber);
//     return (
//         <div>
//             <div className='container mt-5'>
//                 <h1 className='text-primary mb-3'>My Blog</h1>
//                 <Posts posts={currentPosts} loading={loading} />
//                 <Pagination
//                     postsPerPage={postsPerPage}
//                     totalPosts={posts.length}
//                     currentPage={currentPage}
//                     paginate={paginate}
//                 />
//             </div>
//         </div>
//     )
// }

const App = () => {
    const [filesData, setFilesData] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            // setLoading(true);
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // setPosts(res.data);
            // setLoading(false);
            const res = await axios.get('http://localhost:5000/data');
            setFilesData(res.data);
        };

        fetchPosts();
    }, []);
    return (
        <div className='container mt-4'>
            <h4 className='display-4 text-center mb-4'>
                <i className='fab fa-react' /> React File Upload
            </h4>
            { filesData && <p>You have <i>{filesData.length}</i> items</p> &&
                filesData.map( item => <p key={item}> {item} </p>)
            }
            <FileUpload />
        </div>
    );
}


export default App;
