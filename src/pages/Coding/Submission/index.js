import React from 'react';

const Table = (data) => {
  return <div>{JSON.stringify(data)}</div>
}

const Submission = ({ checkeds, setCheckeds }) => {

  const setup = (idx) => {
    setCheckeds(checkeds.map( (_, i) => i === idx ? 1 : 0 ))
  }

  return (
    <div className="submission-container">
      <div className="submission-controller">
        程式碼執行結果:
        {
          checkeds.map( (checked, idx) =>
            <span key={idx}> 
              <input
                type="checkbox"
                checked={checked}
                onChange={ () => setup(idx) }
              />
              <span>{`第${idx + 1}題 `}</span>
            </span>
          )
        }
      </div>
      <Table data={[{x: 3}, {y: 2}]} />
    </div>
  );
}

export default Submission;