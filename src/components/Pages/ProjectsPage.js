import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { ArrowBack, ArrowForward, Launch } from "@material-ui/icons";

import * as styles from "../../theme/commonStyles";
import projectsData from "../../updated_projects.json";

const ProjectsPage = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTablet = useMediaQuery(muiTheme.breakpoints.down("md"));
  const projectsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      backgroundColor: "#f8f9fa",
      margin: "0 auto",
      paddingBottom: "4rem",
      paddingTop: "2rem",
      minHeight: "100vh",
      padding: "2rem 1rem 4rem",
    },
    headerText: {
      ...styles.headerText,
      fontSize: "2.5rem",
      marginBottom: "1rem",
      background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    divider: {
      ...styles.divider,
      background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
      height: "0.2rem",
      width: "12rem",
      marginBottom: "3rem",
    },
    carouselContainer: {
      width: "95%",
      maxWidth: "1400px",
      position: "relative",
      overflow: "hidden",
    },
    projectsGrid: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      gap: "2.5rem",
      padding: "2rem 0",
    },
    projectCard: {
      minWidth: isMobile ? "100%" : isTablet ? "calc(50% - 1.25rem)" : "calc(33.333% - 1.67rem)",
      maxWidth: isMobile ? "100%" : isTablet ? "calc(50% - 1.25rem)" : "calc(33.333% - 1.67rem)",
      minHeight: "600px",
      borderRadius: "16px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
      },
    },
    projectImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      display: "block",
    },
    cardContent: {
      padding: "2rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      textAlign: "center",
    },
    projectTitle: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#2d3748",
      lineHeight: "1.3",
      textAlign: "center",
    },
    projectDescription: {
      fontSize: "0.95rem",
      color: "#4a5568",
      lineHeight: "1.5",
      marginBottom: "1.5rem",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
      flexGrow: 1,
    },
    techChipsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.5rem",
      justifyContent: "center",
    },
    techChip: {
      backgroundColor: "#e2e8f0",
      color: "#4a5568",
      fontSize: "0.75rem",
      height: "24px",
      "&:hover": {
        backgroundColor: "#cbd5e0",
      },
    },
    metricsContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(2, 1fr)",
      gap: "1rem",
      marginBottom: "1.5rem",
      padding: "1.2rem",
      backgroundColor: "#f7fafc",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },
    metricItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0.5rem",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      minHeight: "70px",
      justifyContent: "center",
    },
    metricValue: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "#2d3748",
      marginBottom: "0.25rem",
    },
    metricLabel: {
      fontSize: "0.75rem",
      color: "#718096",
      textAlign: "center",
      lineHeight: "1.3",
      fontWeight: "500",
      wordBreak: "break-word",
      hyphens: "auto",
    },
    cardActions: {
      padding: "0 1.5rem 1.5rem",
      justifyContent: "center",
      marginTop: "auto",
    },
    actionButton: {
      borderRadius: "8px",
      textTransform: "none",
      fontWeight: "600",
      padding: "0.5rem 1rem",
    },
    primaryButton: {
      background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
      color: "white",
      "&:hover": {
        background: "linear-gradient(45deg, #5a67d8 30%, #6b46c1 90%)",
      },
    },
    secondaryButton: {
      border: "1px solid #e2e8f0",
      color: "#4a5568",
      "&:hover": {
        backgroundColor: "#f7fafc",
      },
    },
    navigationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1.5rem",
      marginTop: "3rem",
      padding: "0 1rem",
    },
    navButton: {
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        backgroundColor: "#f7fafc",
        transform: "scale(1.05)",
      },
      "&:disabled": {
        backgroundColor: "#e2e8f0",
        color: "#a0aec0",
      },
    },
    pageIndicator: {
      fontSize: "0.9rem",
      color: "#4a5568",
      fontWeight: "500",
    },
  });

  const classes = useStyles();

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };



  const renderProjectCard = (project, index) => (
    <Card key={index} className={classes.projectCard}>
      {project.projectImage && (
        <img
          src={`${process.env.PUBLIC_URL}/${project.projectImage}`}
          alt={project.title}
          className={classes.projectImage}
        />
      )}
      <CardContent className={classes.cardContent}>
        <Typography className={classes.projectTitle}>
          {project.title}
        </Typography>
        
        <Typography className={classes.projectDescription}>
          {project.description}
        </Typography>

        <Box className={classes.techChipsContainer}>
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <Chip
              key={techIndex}
              label={tech}
              size="small"
              className={classes.techChip}
            />
          ))}
          {project.technologies.length > 4 && (
            <Chip
              label={`+${project.technologies.length - 4} more`}
              size="small"
              className={classes.techChip}
            />
          )}
        </Box>

        {project.metrics && (
          <Box className={classes.metricsContainer}>
            {project.metrics.slice(0, 4).map((metric, metricIndex) => (
              <Box key={metricIndex} className={classes.metricItem}>
                <Typography className={classes.metricValue}>
                  {metric.value}
                </Typography>
                <Typography className={classes.metricLabel}>
                  {metric.name.length > 20 ? `${metric.name.substring(0, 18)}...` : metric.name}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </CardContent>

      {project.previewLink && (
        <CardActions className={classes.cardActions}>
          <Button
            className={`${classes.actionButton} ${classes.primaryButton}`}
            startIcon={<Launch />}
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </Button>
        </CardActions>
      )}
    </Card>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="Projects">
      <Typography className={classes.headerText} align="center">
        Featured Projects
      </Typography>
      <Divider classes={{ root: classes.divider }} />

      <Box className={classes.carouselContainer}>
        <Box 
          className={classes.projectsGrid}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <Box
              key={pageIndex}
              style={{
                display: "flex",
                gap: "2.5rem",
                minWidth: "100%",
                justifyContent: isMobile ? "center" : "flex-start",
                alignItems: "stretch",
                padding: "0 1rem",
              }}
            >
              {projectsData
                .slice(pageIndex * projectsPerPage, (pageIndex + 1) * projectsPerPage)
                .map((project, index) => renderProjectCard(project, index))}
            </Box>
          ))}
        </Box>

        <Box className={classes.navigationContainer}>
          <IconButton
            className={classes.navButton}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ArrowBack />
          </IconButton>
          
          <Typography className={classes.pageIndicator}>
            {currentIndex + 1} of {totalPages}
          </Typography>
          
          <IconButton
            className={classes.navButton}
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsPage;