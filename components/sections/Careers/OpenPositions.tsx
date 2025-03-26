import React from "react";
import CustomButton from "components/elements/CustomButton";

interface JobData {
  jobTitle: string;
  jobDescription: string;
  jobLink: string;
}

interface JobItemProps extends JobData {}

interface OpenPositionsProps {
  jobData: JobData[];
}

const JobItem: React.FC<JobItemProps> = ({ jobTitle, jobDescription, jobLink }) => {
  return (
    <div className="border-b border-[#FFFFFF4D] last:border-b-0">
      <div className="py-10 px-6 flex flex-wrap justify-between items-start gap-4">
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-atkinson font-normal text-2xl leading-8 tracking-wide text-[#D8D8D8] mb-2">
            {jobTitle}
          </h3>
          <p className="font-atkinson font-normal text-xl leading-7 tracking-wide text-[#A2A2A2]">
            {jobDescription}
          </p>
        </div>
        <CustomButton
          className="justify-center"
          variant="secondary"
          href={jobLink}
        >
          Apply now
        </CustomButton>
      </div>
    </div>
  );
};

const OpenPositions: React.FC<OpenPositionsProps> = ({ jobData }) => {
  return (
    <div
      id="open-positions" 
      className="relative min-h-[800px] custom-bg bg-no-repeat overflow-hidden mb-16 md:mb-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 relative sm:px-6 lg:px-8">
        <div className="w-full rounded-[32px] backdrop-blur-[20px] bg-[#000000CC] border border-[#FFFFFF4D] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="border-b border-[#FFFFFF4D] lg:w-1/4 lg:min-w-[300px] lg:border-r lg:border-[#FFFFFF4D] lg:border-b-0">
              <div className="p-10 h-full flex items-left justify-center lg:justify-start">
                <h2 className="font-gradual font-bold text-5xl leading-tight tracking-normal text-[#E0E0E0]">
                  Open<br />Positions
                </h2>
              </div>
            </div>
            
            <div className="flex-1">
              {jobData.map((job, index) => (
                <JobItem
                  key={index}
                  jobTitle={job.jobTitle}
                  jobDescription={job.jobDescription}
                  jobLink={job.jobLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;