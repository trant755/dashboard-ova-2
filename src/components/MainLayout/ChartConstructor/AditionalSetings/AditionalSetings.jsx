import * as SC from "./AditionalSetings.styled";
import { SingleInfo } from "./SingleInfo/SingleInfo";
import { FilterSelects } from "./FilterSelects/FilterSelects";

export const AditionalSetings = ({ aditionalSetings }) => {
  const { singleInfo, filterSelects } = aditionalSetings;
  if (singleInfo || filterSelects?.length > 1) {
    return (
      <SC.AditionalSetingsWrapper>
        {singleInfo && <SingleInfo singleInfo={singleInfo} />}
        {filterSelects && filterSelects.length > 1 && (
          <FilterSelects filterSelects={filterSelects} />
        )}
      </SC.AditionalSetingsWrapper>
    );
  }
};
