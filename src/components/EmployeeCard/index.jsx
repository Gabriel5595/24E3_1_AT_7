import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 100%;
    max-width: 350px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #f5f5f5;
`;

const ProfilePic = styled.div`
    width: 60px;
    height: 60px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 16px;
`;

const Info = styled.div`
    font-size: 14px;
    line-height: 1.5;
`;

const Name = styled.h2`
    font-size: 18px;
    margin: 0;
    font-weight: bold;
`;

const IconsRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 16px;
`;

const Icon = styled.div`
    font-size: 20px;
    cursor: pointer;
`;

const TasksTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    background-color: #eaeaea;
    padding: 8px;
    font-size: 14px;
    text-align: left;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

const TableCell = styled.td`
    padding: 8px;
    border-bottom: 1px solid #ddd;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    transform: scale(1.2);
    cursor: pointer;
`;

export default function EmployeeCard() {
    return (
        <CardContainer>
            <Header>
                <ProfilePic />
                <Info>
                    <Name>Nome Completo</Name>
                    <p>Data de Nascimento</p>
                    <p>Setor</p>
                    <p>Cargo</p>
                </Info>
            </Header>

            <IconsRow>
                <Icon>📞</Icon>
                <Icon>✉️</Icon>
                <Icon>📍</Icon>
            </IconsRow>

            <TasksTable>
                <thead>
                    <TableRow>
                        <TableHeader>Estado</TableHeader>
                        <TableHeader>Tarefas</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    <TableRow>
                        <TableCell>
                            <Checkbox />
                        </TableCell>
                        <TableCell>Tarefa 1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Checkbox />
                        </TableCell>
                        <TableCell>Tarefa 2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Checkbox />
                        </TableCell>
                        <TableCell>Tarefa 3</TableCell>
                    </TableRow>
                </tbody>
            </TasksTable>
        </CardContainer>
    );
};

EmployeeCard;
