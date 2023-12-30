import Categories from "../candidates-listing-pages/components/Categories";
import DestinationRangeSlider from "../candidates-listing-pages/components/DestinationRangeSlider";
import CandidatesGender from "../candidates-listing-pages/components/CandidatesGender";
import LocationBox from "../candidates-listing-pages/components/LocationBox";
import SearchBox from "../candidates-listing-pages/components/SearchBox";
import DatePosted from "../candidates-listing-pages/components/DatePosted";
import Experience from "../candidates-listing-pages/components/Experience";
import Qualification from "../candidates-listing-pages/components/Qualification";

const FilterSidebar = () => {
    return (
        <div className="inner-column pd-right">
            <div className="filters-outer">
                <button
                    type="button"
                    className="btn-close text-reset close-filters show-1023"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                {/* End .close filter */}

                <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                        <SearchBox />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                        <LocationBox />
                    </div>

                    <p>Radius around selected destination</p>
                    <DestinationRangeSlider />
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                        <Categories />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Candidate Gender</h4>
                    <div className="form-group">
                        <CandidatesGender />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <DatePosted />
                </div>
                {/* <!-- Filter Block --> */}

                <div className="checkbox-outer">
                    <h4>Experience</h4>
                    <Experience />
                </div>
                {/* <!-- Filter Block --> */}

                <div className=" checkbox-outer">
                    <h4>Qualification</h4>
                    <Qualification />
                </div>
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}
        </div>
    );
};

export default FilterSidebar;
