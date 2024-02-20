import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoadingBar } from "./useLoadingBar";
import { useChangeValue } from "./commonCustom";
import noticeService from "../apis/noticeService";

const useBoardList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useLoadingBar();
    const [boardList, setBoardList] = useState([]);
    const [searchType, setSearchType] = useChangeValue('01');
    const [searchValue, setSearchValue] = useChangeValue('');
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    useEffect(() => {
        getNoticeList(page);
        return () => {
            setBoardList([]);
        };
    }, [page]);

    const handleView = (boardId) => {
        navigate("/boardView")
    }

    const getNoticeList = async (page) => {
        setLoading({ isLoading: true });
        try {
            const getData = await noticeService.getData(page, searchType, searchValue);
            setBoardList(getData.list);
            setTotalCnt(getData.totalCnt);
        } catch (error) {
            console.error("Error fetching board list:", error);
        } finally {
            setLoading({ isLoading: false });
            setPage(page);
        }
    }

    const changePage = (page) => {
        setPage(page);
    };


    return { boardList, searchType, setSearchType, searchValue, setSearchValue, page, totalCnt, handleView, changePage, getNoticeList };
};

export default useBoardList;