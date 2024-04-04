import React, { ChangeEvent } from "react";
import { Input } from "antd";
import {SearchOutlined} from '@ant-design/icons'

type SearchInputProps = {
  onSearch: (inputValue: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <Input
      placeholder="search by title"
      size="large"
      onChange={handleInputChange}
      style={{width:300}}
      suffix={<SearchOutlined />} 
    />
  );
};

export default SearchInput;
