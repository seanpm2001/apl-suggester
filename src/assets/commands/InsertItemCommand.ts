/*
 *   Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/* tslint:disable */

import { IJsonSchema } from "../IJsonSchema";

export const JSON_SCHEMA: IJsonSchema = {
  type: "object",
  properties: {
    type: {
      type: "string",
      description: "The type of the command.",
    },
    at: {
      type: "number",
      description:
        "The position within the parent’s children to insert this item. Note that the default value appends the item.",
    },
    componentId: {
      type: "string",
      description: "The id of the component.",
    },
    "item": {},
    "items": {},
  },
  required: ["type"],
  additionalProperties: false,
};
