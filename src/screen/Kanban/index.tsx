import styled from "@emotion/styled";
import { SearchPanel } from "./search-panel";
import { useDocumentTitle } from "utils";
import { KanbanColumn } from "./kanban-column";
import { useKanbanSearchParams, useProjectInUrl } from "./util";
import { useKanbans } from "utils/kanban";
import { ScreenContainer } from "components/lib";

export const KanbanScreen = () => {
  useDocumentTitle("看板列表");

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans } = useKanbans(useKanbanSearchParams());

  return (
    <ScreenContainer>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      <ColumnsContainer>
        {kanbans?.map((kanban) => (
          <KanbanColumn key={kanban.id} kanban={kanban} />
        ))}
      </ColumnsContainer>
    </ScreenContainer>
  );
};

export const ColumnsContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
