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
        "Designed, developed, and maintained the company's digital platform supporting travel consultation, study-abroad, work-abroad, visa advisory, relocation, and business travel services",
        "Built responsive user interfaces, developed backend APIs, managed databases, optimized website performance, and implemented content management solutions",
        "Increased consultation inquiries by 25%. Reduced page load time by 40%. Automated 80% of inquiry routing",
      ],
    },
    ChinaSquare: {
      jobTitle: "IT Support, Data Management & Customer Operations @",
      duration: "MAR 2024 - FEB 2026",
      desc: [
        "Supported retail operations through a combination of technical assistance, data management, and customer support.",
        "Maintained business records, resolved basic hardware and software issues, assisted users with system-related challenges, and ensured data accuracy across operational workflows.",
        "Developed strong problem-solving, communication, and analytical skills while working with digital systems in a high-volume environment."
      ],
    },
    XgamerTechnologies: {
      jobTitle: "Web Developer & Technical Support Specialist @",
      duration: "JAN 2023 - MAR 2024",
      desc: [
        "Developed and maintained web applications and website features to support business operations and customer engagement. Built responsive user interfaces, implemented new functionality, and maintained digital content across web platforms.",
        "In addition to software development responsibilities, assembled and customized gaming PCs based on customer requirements, performed hardware upgrades, diagnosed and resolved minor technical issues, and provided technical support related to computer systems and peripherals.",
        "Collaborated with customers and team members to deliver tailored technology solutions and improve overall user experience."
      ],
    },
    Turing: {
      jobTitle: "Junior Software Engineer  @",
      duration: "SEP 2021 - DEC 2022",
      desc: [
        "Developed  responsive React web pages  from scratch, both on client and server side.",
        "Iteratively built web experiences for users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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