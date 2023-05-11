const Pagination = ({pagination, setPagination}) => {
    const handleMove = (back) => {
        let tmpPage = {...pagination};
        if (back) {
            if (pagination.offset > 0) {
                tmpPage.itemsPerPage = tmpPage.itemsPerPageFixed;
                tmpPage.offset = pagination.offset - pagination.itemsPerPageFixed;
                tmpPage.page = tmpPage.page - 1;
            }
        } else {
            if ((pagination.offset + (pagination.itemsPerPageFixed * 2)) > pagination.maxItems ) {
                tmpPage.itemsPerPage = pagination.maxItems - (pagination.offset + pagination.itemsPerPageFixed);
            }
            tmpPage.offset = pagination.offset + pagination.itemsPerPageFixed;
            tmpPage.page = tmpPage.page + 1;
        }
        setPagination(tmpPage);
    };

    const handleChangePage = (page) => {
        let tmpPage = {...pagination};
        if (((page*pagination.itemsPerPageFixed) + pagination.itemsPerPageFixed) > pagination.maxItems) {
            tmpPage.itemsPerPage = pagination.maxItems - page*pagination.itemsPerPageFixed;
        } else {
            tmpPage.itemsPerPage = tmpPage.itemsPerPageFixed;
        }
        tmpPage.offset =  page*pagination.itemsPerPageFixed;
        tmpPage.page = page;
        setPagination(tmpPage);
    }

    return (
        <div className="pagination">
            <button 
                onClick={() => handleMove(true)}
                disabled={pagination.offset === 0 ? true : false}
            >⬅️</button>
            {[...Array(Math.floor((pagination.maxItems / pagination.itemsPerPageFixed) + 1))].map((_, i) => (
                <button
                    key={`pagination_${i}`}
                    onClick={() => handleChangePage(i)}
                    style={pagination.page === i ? {background: 'darkorange'} : null}
                >
                    {i + 1}
                </button>
            ))}
            <button 
                onClick={() => handleMove(false)}
                disabled={(pagination.itemsPerPageFixed + pagination.offset) >= pagination.maxItems ? true : false}
            >➡️</button>
        </div>
    );
};

export default Pagination;
