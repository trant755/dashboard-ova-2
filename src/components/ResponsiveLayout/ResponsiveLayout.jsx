import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Box } from "@mui/material";
import { useRef } from "react";
const ResponsiveGridLayout = WidthProvider(Responsive);

const breakpoints = { lg: 1200, md: 768, sm: 768, xs: 480, xxs: 0 };
const cols = { lg: 12, md: 12, sm: 12, xs: 8, xxs: 4 };

const ResponsiveLayout = ({ layout, setLayout, children }) => {
  const [isDruggable, setIsDruggable] = useState(true);
  const wrapper = useRef(null);

  // для тесту
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsDruggable(false);
    } else {
      setIsDruggable(true);
    }
  }, []);
  // збереження зміни координат
  // const onLayoutChange = (newLayout) => {
  //   setLayout(newLayout);
  //   localStorage.setItem("layout", JSON.stringify(newLayout));
  // };

  return (
    <Box ref={wrapper}>
      <ResponsiveGridLayout
        style={{ padding: "0" }}
        isDraggable={isDruggable}
        className="layout"
        layouts={{
          lg: layout,
          md: layout,
          sm: layout,
          xs: layout,
          xxs: layout,
        }}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={100}
        margin={[8, 8]}
        containerPadding={[8, 8]}
        isResizable={false}
        // useCSSTransforms - оптимізація
        useCSSTransforms={true}
        // compactType - прилипання - горизонтальне або вертикальне
        compactType={"vertical"}
        autoSize={true}
        // onLayoutChange={onLayoutChange}
        preventCollision={false}
      >
        {children}
      </ResponsiveGridLayout>
    </Box>
  );
};

export default ResponsiveLayout;
