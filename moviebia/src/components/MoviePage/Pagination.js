import classes from "./Pagination.module.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [1, 2, 3, 4, 5];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={classes.pagination}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? `${classes["button"]} ${classes["active"]}` : classes.button}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;