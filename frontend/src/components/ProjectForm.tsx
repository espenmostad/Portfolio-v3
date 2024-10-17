import React from "react";
import { useState, type FormEvent } from "react";

export type CreateProjectFormProps = {
  onCreateNewProjectButtonClicked: (title: string,description: string, category: string) => void;
};

export default function ProjectForm(props: CreateProjectFormProps){
  const { onCreateNewProjectButtonClicked } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const createNewProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description || !category) return;
      onCreateNewProjectButtonClicked(title, description, category);
      setTitle("");
      setDescription("");
      setCategory("");
  };

    return (
      <section>
        <h2>Add new project</h2>
        <form onSubmit={createNewProject} className="project-form">
         
                <label htmlFor="title">Title:</label><br />
                <input 
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    placeholder="Project title here"
                    onChange= {(e) => setTitle(e.target.value)}
                /><br />
                
                <label htmlFor="description">Description:</label><br />
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Project description"
                    onChange= {(e) => setDescription(e.target.value)}
                ></textarea><br />
                <label htmlFor="category">Category:</label><br />
                <input 
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    placeholder="Example: Javascript"
                    onChange= {(e) => setCategory(e.target.value)}
                /><br />
                
                <button type="submit" id="form-button">Submit project</button>
            </form>
      </section> 
    );
  }

