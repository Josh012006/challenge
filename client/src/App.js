import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./pages/admin/LoginPage";

import EventPage from "./pages/normal/EventPage";
import HomePage from "./pages/normal/HomePage";
import CoursePage from "./pages/normal/CoursePage";
import ActivityPage from "./pages/normal/ActivityPage";

import NormalLayout from "./components/layout/NormalLayout";
import AdminLayout from "./components/layout/AdminLayout";
import AuthMiddleware from "./components/admin/AuthMiddleware";

import TypeSelectionPage from "./pages/admin/TypeSelectionPage";
import AddForm from "./components/admin/AddForm";
import TaskPage from "./pages/admin/TaskPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NormalLayout />}>
                <Route index element={<HomePage />} />
                <Route path="courses" element={<CoursePage />} />
                <Route path="activities" element={<ActivityPage />} />
                <Route path="events" element={<EventPage />} />
            </Route>
            <Route path="/admin/*" element={<AdminLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route element={<AuthMiddleware />}>
                    <Route path="add" element={<TypeSelectionPage />} />
                    <Route path="add/:type" element={<AddForm />} />
                    <Route index element={<TaskPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
