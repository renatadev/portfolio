import React from "react";
import * as SC from "./TechStack.style";

const TechStack = ({ techData }) => {
  if (!techData) return <h1>Loading...</h1>;
  const techRecord = techData.records;
  return (
    <>
      <h2 id="Tech">Tech Stack</h2>
      <SC.Margin>
        <SC.FlexedStack>
          {techRecord.map(record => (
            <SC.StackContainer key={record.fields.stack_id}>
              <a
                href={record.fields.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={record.fields.logo}
                  alt={record.fields.tech}
                  title={record.fields.tech}
                />
              </a>
            </SC.StackContainer>
          ))}
        </SC.FlexedStack>
      </SC.Margin>
    </>
  );
};

export default TechStack;
