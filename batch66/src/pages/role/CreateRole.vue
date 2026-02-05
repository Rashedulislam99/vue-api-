<template>
  <section class="role-page">
    <div class="role-hero">
      <div>
        <span class="badge">Access control studio</span>
        <h2 class="section-title">Create a role</h2>
        <p class="section-sub">
          Build a role profile with clear scope, access rules, and a sharp visual identity for your team.
        </p>
        <div class="kpi-grid">
          <div class="kpi-card">
            <p>Teams covered</p>
            <h3>Operations</h3>
            <small>Finance, Support</small>
          </div>
          <div class="kpi-card">
            <p>Default access tier</p>
            <h3>Guided</h3>
            <small>Review required</small>
          </div>
          <div class="kpi-card">
            <p>Provision time</p>
            <h3>12 min</h3>
            <small>Avg setup</small>
          </div>
          <div class="kpi-card">
            <p>Coverage</p>
            <h3>8 hubs</h3>
            <small>Regional</small>
          </div>
        </div>
      </div>
      <div class="hero-card">
        <span class="badge">Role blueprint</span>
        <h3>Operational Steward</h3>
        <p>Balanced access with elevated visibility on daily workflows and approvals.</p>
        <ul>
          <li>Approve purchase requests</li>
          <li>View analytics dashboards</li>
          <li>Manage support queues</li>
        </ul>
      </div>
    </div>

    <div class="role-grid">
      <form class="panel">
        <div class="page-head">
          <div>
            <h2>Role details</h2>
            <p>Fill in the fields below to configure the role and its permissions.</p>
          </div>
          <button class="button-outline" type="button">Save draft</button>
        </div>

        <div class="form-grid">
          <label class="field">
            <span>Role name</span>
            <input type="text" placeholder="Operations Lead" />
          </label>
          <label class="field">
            <span>Role code</span>
            <input type="text" placeholder="OPS-LEAD" />
          </label>
          <label class="field">
            <span>Department</span>
            <select>
              <option>Operations</option>
              <option>Finance</option>
              <option>Customer Success</option>
              <option>Technology</option>
            </select>
          </label>
          <label class="field">
            <span>Role color</span>
            <input type="color" value="#e05a2a" />
          </label>
          <label class="field full">
            <span>Role summary</span>
            <textarea rows="3" placeholder="Short description for dashboards and user cards."></textarea>
          </label>
          <label class="field">
            <span>Workspace scope</span>
            <select>
              <option>All locations</option>
              <option>Regional hubs only</option>
              <option>Assigned locations</option>
            </select>
          </label>
          <label class="field">
            <span>Approval tier</span>
            <select>
              <option>Guided</option>
              <option>Independent</option>
              <option>Review required</option>
            </select>
          </label>
          <label class="field full">
            <span>Default landing</span>
            <select>
              <option>Operational dashboard</option>
              <option>Queue overview</option>
              <option>Analytics hub</option>
            </select>
          </label>
        </div>

        <div>
          <h3 class="section-title">Permissions</h3>
          <p class="section-sub">Select the capabilities this role can manage day to day.</p>
          <div class="permission-grid">
            <label class="permission">
              <input type="checkbox" checked />
              <div>
                <strong>Approvals</strong>
                <span>Purchase requests, time-offs, vendors</span>
              </div>
            </label>
            <label class="permission">
              <input type="checkbox" checked />
              <div>
                <strong>Reports</strong>
                <span>View analytics dashboards and exports</span>
              </div>
            </label>
            <label class="permission">
              <input type="checkbox" />
              <div>
                <strong>Billing</strong>
                <span>Manage invoices and payment methods</span>
              </div>
            </label>
            <label class="permission">
              <input type="checkbox" checked />
              <div>
                <strong>Support queues</strong>
                <span>Assign, close, and escalate tickets</span>
              </div>
            </label>
          </div>
        </div>

        <div class="page-actions">
          <button class="button-outline" type="button">Cancel</button>
          <button class="button" type="submit">Create role</button>
        </div>
      </form>

      <aside class="role-preview">
        <div class="preview-card">
          <div class="preview-top">
            <div class="avatar">OL</div>
            <div>
              <p class="section-title">Operations Lead</p>
              <p class="section-sub">Active - Guided approvals</p>
            </div>
          </div>
          <div class="kpi-grid is-two">
            <div class="kpi-card">
              <p>Assigned teams</p>
              <h3>12 members</h3>
              <small>Cross region</small>
            </div>
            <div class="kpi-card">
              <p>Scope</p>
              <h3>Regional hubs</h3>
              <small>8 locations</small>
            </div>
          </div>
          <div class="preview-tags">
            <span>Approvals</span>
            <span>Support queues</span>
            <span>Reports</span>
          </div>
        </div>

        <div class="preview-timeline">
          <h3 class="section-title">Setup checklist</h3>
          <div class="timeline-item">
            <span class="dot active"></span>
            <div>
              <p>Role details drafted</p>
              <small>Today, 09:24</small>
            </div>
          </div>
          <div class="timeline-item">
            <span class="dot"></span>
            <div>
              <p>Permissions reviewed</p>
              <small>Pending</small>
            </div>
          </div>
          <div class="timeline-item">
            <span class="dot"></span>
            <div>
              <p>Team assignment</p>
              <small>Pending</small>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>
