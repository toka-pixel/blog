import { useState, useMemo } from "react";
import SearchInput from "../SearchInput";
import NewPost from "../Post/NewPost";
import useGetPosts from "../Post/Hooks/useGetPosts";
import { Row, Col, Pagination } from "antd";
import Post from "../Post/Post";
import { IPost } from "../../interfaces/post.interface";
import Loading from "../shared-components/Loading/Loading";

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetPosts();

  // Number of items per page
  const itemsPerPage = 10;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items for the current page
  const currentPageData = data?.slice(startIndex, endIndex);

  // search posts by title
  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const posts = useMemo(() => {
    if (searchValue) {
      return currentPageData.filter((post: IPost) =>
        post.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
    }
    return currentPageData;
  }, [searchValue, currentPageData]);

  return (
    <div className="mx-10">
      <Row justify={"space-between"} className="my-6">
        <Col xs={24} sm={8}>
          <SearchInput onSearch={handleSearchValue} />
        </Col>
        <Col xs={24} sm={8}></Col>
        <Col xs={24} sm={8}>
          <NewPost />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Loading />
        ) : (
          posts?.map((post: IPost) => (
            <Col xs={24} md={12} lg={8} xl={8} key={post.id}>
              <Post post={post} />
            </Col>
          ))
        )}
      </Row>
      {posts?.length > 0 && (
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={data?.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          className="mt-6"
        />
      )}
    </div>
  );
};

export default Home;
