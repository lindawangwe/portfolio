import React from "react";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  isMobile: boolean;
  [key: string]: unknown; // allows any other spread-in props (e.g. aria attributes)
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number, isMobile: boolean) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

interface ExperienceItem {
  jobTitle: string;
  duration: string;
  desc: string[];
}

type ExperienceItems = Record<string, ExperienceItem>;

const JobList: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems: ExperienceItems = {
    Mosline: {
      jobTitle: "Software Engineer @",
      duration: "MAR 2026 - PRESENT",
      desc: [
        "Built and maintained a digital platform for travel consultation, study-abroad, work-abroad, visa advisory, relocation, and business travel services.",
        "Created responsive landing pages and CRM dashboards for bookings, inquiries, and automated workflows.",
        "Developed frontend interfaces, backend APIs, and data workflows to improve usability, performance, and reliability.",
        "Increased consultation inquiries by 25%, reduced page load time by 40%, and automated 80% of inquiry routing.",
      ],
    },
    ChinaSquare: {
      jobTitle: "IT Support, Data Management & Customer Operations @",
      duration: "MAR 2024 - FEB 2026",
      desc: [
        "Delivered technical support and data management for retail operations, ensuring accurate records and smooth day-to-day workflows.",
        "Resolved software and hardware issues, supported end users, and maintained operational systems in a high-volume environment.",
        "Strengthened problem-solving, communication, and analytical skills while supporting customer-facing business operations."
      ],
    },
    XgamerTechnologies: {
      jobTitle: "Web Developer & Technical Support Specialist @",
      duration: "JAN 2023 - MAR 2024",
      desc: [
        "Developed and maintained responsive web applications and marketing pages to support customer engagement and business operations.",
        "Built and customized gaming PCs, performed upgrades, diagnosed issues, and provided technical support for hardware and peripherals.",
        "Worked closely with customers and teams to deliver tailored technology solutions and improve the overall user experience."
      ],
    },
    Turing: {
      jobTitle: "Junior Software Engineer @",
      duration: "SEP 2021 - DEC 2022",
      desc: [
        "Built responsive React interfaces from the ground up for client and server-rendered web experiences.",
        "Created user-facing features across high-traffic pages, with a focus on clean implementation and maintainability.",
        "Collaborated with senior engineers and product teams throughout the full software development lifecycle.",
      ],
    },
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      flexGrow: 1, 
      bgcolor: "transparent", 
      display: "flex", 
      flexDirection: isMobile ? "column" : "row",
      height: "auto",


      minHeight: 300
    }}>
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{ 
          borderRight: isMobile ? 0 : 1, 
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--green-bright)"
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none"
          }
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab 
            key={i} 
            label={key} 
            {...a11yProps(i, isMobile)} 
            sx={{
              color: "var(--slate)",
              fontFamily: "NTR",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--green-bright)"
              },
              "&:hover": {
                color: "var(--green-bright)",
                backgroundColor: "var(--green-tint)"
              }
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {Object.keys(experienceItems).map((key, i) => (
          <TabPanel key={i} value={value} index={i} isMobile={isMobile}>
            <span className="joblist-job-title">
              {experienceItems[key].jobTitle + " "}
            </span>
            <span className="joblist-job-company">{key}</span>
            <div className="joblist-duration">
              {experienceItems[key].duration}
            </div>
            <ul className="job-description">
              {experienceItems[key].desc.map(function (descItem, i) {
                return (
                  <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                    <li>{descItem}</li>
                  </FadeInSection>
                );
              })}
            </ul>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default JobList;